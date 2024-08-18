const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

admin.initializeApp();

// Configuración del transporte de correo electrónico utilizando nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña_de_correo',
    },
});

exports.sendAppointmentReminder = functions.firestore
    .document('appointments/{appointmentId}')
    .onCreate(async (snap, context) => {
        const appointmentData = snap.data();
        const email = appointmentData.clientEmail;
        const date = appointmentData.date.toDate().toLocaleString();

        const mailOptions = {
            from: 'tu_correo@gmail.com',
            to: email,
            subject: 'Recordatorio de Cita Veterinaria',
            text: `Hola, este es un recordatorio para tu cita el día ${date} en nuestra clínica veterinaria.`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Recordatorio de cita enviado a', email);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    });

    exports.createAppointment = functions.https.onRequest(async (req, res) => {
        const { clientName, clientEmail, petName, service, date } = req.body;
    
        try {
            await admin.firestore().collection('appointments').add({
                clientName,
                clientEmail,
                petName,
                service,
                date: admin.firestore.Timestamp.fromDate(new Date(date)),
            });
    
            res.status(200).send('Cita creada exitosamente');
        } catch (error) {
            console.error('Error al crear la cita:', error);
            res.status(500).send('Error al crear la cita');
        }
    });

    exports.sendMedicalRecordNotification = functions.firestore
    .document('medicalRecords/{recordId}')
    .onUpdate(async (change, context) => {
        const newValue = change.after.data();
        const email = newValue.ownerEmail;
        const petName = newValue.petName;

        const mailOptions = {
            from: 'tu_correo@gmail.com',
            to: email,
            subject: 'Actualización en el Registro Médico de tu Mascota',
            text: `Hola, el registro médico de tu mascota ${petName} ha sido actualizado.`,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Notificación enviada a', email);
        } catch (error) {
            console.error('Error al enviar la notificación:', error);
        }
    });


    exports.createUser = functions.https.onRequest(async (req, res) => {
        const {
            id, address, birth_date, cellular_phone, email, last_access_date,
            name, password, role, signup_date, status, surname,
            license, vet_specialty, schedule, pets
        } = req.body;
    
        try {
            // Hashing the password before storing it
            const password_salt_hash = await bcrypt.hash(password, 10);
    
            const userRecord = await admin.auth().createUser({
                uid: id,  // Setting the UID to a custom value
                email: email,
                password: password,
                displayName: `${name} ${surname}`,
            });
    
            await admin.firestore().collection('users').doc(userRecord.uid).set({
                id,
                address,
                birth_date,
                cellular_phone,
                email,
                last_access_date: last_access_date ? new Date(last_access_date) : admin.firestore.FieldValue.serverTimestamp(),
                name,
                password_salt_hash,
                role,
                signup_date: signup_date ? new Date(signup_date) : admin.firestore.FieldValue.serverTimestamp(),
                status,
                surname,
                license,
                vet_specialty,
                schedule,
                pets,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
    
            res.status(200).send('Usuario creado exitosamente');
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            res.status(500).send('Error al crear el usuario');
        }
    });

exports.createAvailableSlot = functions.https.onRequest(async (req, res) => {
    const { vetId, date, time } = req.body;

    try {
        await admin.firestore().collection('availableSlots').add({
            vetId,
            date: admin.firestore.Timestamp.fromDate(new Date(date)),
            time,
            isBooked: false,
        });

        res.status(200).send('Slot disponible creado exitosamente');
    } catch (error) {
        console.error('Error al crear el slot disponible:', error);
        res.status(500).send('Error al crear el slot disponible');
    }
});

exports.getAvailableSlots = functions.https.onRequest(async (req, res) => {
    const { vetId, date } = req.query;

    try {
        const slotsSnapshot = await admin.firestore().collection('availableSlots')
            .where('vetId', '==', vetId)
            .where('date', '==', admin.firestore.Timestamp.fromDate(new Date(date)))
            .where('isBooked', '==', false)
            .get();

        const slots = slotsSnapshot.docs.map(doc => doc.data());

        res.status(200).send(slots);
    } catch (error) {
        console.error('Error al obtener los slots disponibles:', error);
        res.status(500).send('Error al obtener los slots disponibles');
    }
});

exports.createService = functions.https.onRequest(async (req, res) => {
    const { name, description, price } = req.body;

    try {
        await admin.firestore().collection('services').add({
            name,
            description,
            price,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(200).send('Servicio creado exitosamente');
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        res.status(500).send('Error al crear el servicio');
    }
});

exports.getServices = functions.https.onRequest(async (req, res) => {
    try {
        const servicesSnapshot = await admin.firestore().collection('services').get();

        const services = servicesSnapshot.docs.map(doc => doc.data());

        res.status(200).send(services);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).send('Error al obtener los servicios');
    }
});

exports.createPet = functions.https.onRequest(async (req, res) => {
    const { ownerId, name, type, breed, age } = req.body;

    try {
        await admin.firestore().collection('pets').add({
            ownerId,
            name,
            type,
            breed,
            age,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(200).send('Mascota creada exitosamente');
    } catch (error) {
        console.error('Error al crear la mascota:', error);
        res.status(500).send('Error al crear la mascota');
    }
});

exports.getPetsByOwner = functions.https.onRequest(async (req, res) => {
    const { ownerId } = req.query;

    try {
        const petsSnapshot = await admin.firestore().collection('pets')
            .where('ownerId', '==', ownerId)
            .get();

        const pets = petsSnapshot.docs.map(doc => doc.data());

        res.status(200).send(pets);
    } catch (error) {
        console.error('Error al obtener las mascotas:', error);
        res.status(500).send('Error al obtener las mascotas');
    }
});

exports.createMedicalRecord = functions.https.onRequest(async (req, res) => {
    const { petId, diagnosis, treatment, visitDate, notes } = req.body;

    try {
        await admin.firestore().collection('medicalRecords').add({
            petId,
            diagnosis,
            treatment,
            visitDate: admin.firestore.Timestamp.fromDate(new Date(visitDate)),
            notes,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.status(200).send('Registro médico creado exitosamente');
    } catch (error) {
        console.error('Error al crear el registro médico:', error);
        res.status(500).send('Error al crear el registro médico');
    }
});

exports.getMedicalRecordsByPet = functions.https.onRequest(async (req, res) => {
    const { petId } = req.query;

    try {
        const recordsSnapshot = await admin.firestore().collection('medicalRecords')
            .where('petId', '==', petId)
            .get();

        const records = recordsSnapshot.docs.map(doc => doc.data());

        res.status(200).send(records);
    } catch (error) {
        console.error('Error al obtener los registros médicos:', error);
        res.status(500).send('Error al obtener los registros médicos');
    }
});






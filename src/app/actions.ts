"use server";

import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto."),
  whatsapp: z.string().min(10, "El número de WhatsApp no es válido."),
  email: z.string().email("El correo electrónico no es válido."),
  service: z.string(),
  date: z.date(),
});

export async function submitAppointment(data: unknown) {
  const result = appointmentSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Datos del formulario no válidos.",
    };
  }

  const { name, whatsapp, email, service, date } = result.data;

  try {
    // Here you would typically integrate with Firebase to save the data
    // For example: await db.collection('appointments').add({ ... });
    console.log("Nueva cita agendada:");
    console.log({
      name,
      whatsapp,
      email,
      service,
      date: date.toISOString(),
    });

    return {
      success: true,
      message: "¡Cita agendada con éxito! Nos pondremos en contacto con usted en breve.",
    };
  } catch (error) {
    console.error("Error al guardar la cita:", error);
    return {
      success: false,
      error: "No se pudo agendar la cita. Por favor, intente de nuevo.",
    };
  }
}

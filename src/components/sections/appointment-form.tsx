"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitAppointment } from "@/app/actions";
import { DatePicker } from "@/components/ui/date-picker";
import { Loader2 } from "lucide-react";

const services = [
  "Derecho Civil e Inmobiliario",
  "Derecho Laboral y Administrativo",
  "Derecho Ambiental",
  "Mitigación de Riesgos (Anti-Lavado)",
  "Litigios Estratégicos",
];

const appointmentFormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  whatsapp: z
    .string()
    .min(10, {
      message: "El número de WhatsApp debe tener al menos 10 dígitos.",
    })
    .regex(/^\+?[0-9\s-]{10,}$/, "Número de WhatsApp no válido."),
  email: z.string().email({
    message: "Por favor, introduzca una dirección de correo válida.",
  }),
  service: z.string({
    required_error: "Por favor, seleccione un servicio.",
  }),
  date: z.date({
    required_error: "Se requiere una fecha para la cita.",
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export default function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
    },
  });

  async function onSubmit(data: AppointmentFormValues) {
    setIsSubmitting(true);
    const result = await submitAppointment(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Cita Agendada",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
                <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                    <Input placeholder="+1 (809) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                    <Input placeholder="email@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Servicio de Interés</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione el área de su interés" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha Deseada para la Cita</FormLabel>
              <DatePicker date={field.value} setDate={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Cita"
          )}
        </Button>
      </form>
    </Form>
  );
}

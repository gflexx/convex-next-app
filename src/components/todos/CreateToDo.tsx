"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import { Input } from "../ui/input";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { createToDoFormSchema as formSchema } from "@/lib/zod";


function CreateToDo() {
  const createTodo = useMutation(api.todos.addTodo);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const submitHandler = async (data: z.infer<typeof formSchema>) => {
    try {
      await createTodo({ title: data.title, completed: false });
      form.reset();
    } catch (err) {
      console.log(err);
      form.setError("title", {"message": "Failed to create to do"})
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="w-full mb-9"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    ref={field.ref}
                    type="text"
                    placeholder="What are you planning to do?"
                    disabled={form.formState.isSubmitting}
                    className="p-7 border-4 border-slate-400 rounded-lg"
                  />
                </FormControl>
                <FormMessage className="text-red-300 font-bold" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default CreateToDo;

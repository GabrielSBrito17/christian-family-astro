import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/eventos" }),
  schema: z.object({
    titulo: z.string(),
    data: z.string(),
    local: z.string(),
    imagem: z.string(),
    tag: z.string(),
    descricao: z.string(),
  }),
});

const cultos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cultos" }),
  schema: z.object({
    nome: z.string(),
    dia: z.string(),
    descricao: z.string(),
    horarios: z.array(
      z.object({
        rotulo: z.string(),
        hora: z.string(),
      })
    ),
  }),
});

const comunicados = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/comunicados" }),
  schema: z.object({
    titulo: z.string(),
    data: z.string(),
    urgente: z.boolean().default(false),
  }),
});

export const collections = { eventos, cultos, comunicados };
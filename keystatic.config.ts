// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  // Quando estiver no modo desenvolvimento usa ficheiros locais.
  // Quando estiver no Vercel, usa o GitHub.
  storage: {
    kind: process.env.NODE_ENV === 'production' ? 'github' : 'local',
    repo: 'GabrielSBrito17/christian-family-astro', // O seu repositório
  },
  
  collections: {
    // 1. COMUNICADOS E AVISOS
    comunicados: collection({
      label: 'Avisos e Comunicados',
      slugField: 'titulo',
      path: 'src/content/comunicados/*',
      format: { contentField: 'body' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        data: fields.date({ label: 'Data de Publicação', validation: { isRequired: true } }),
        urgente: fields.checkbox({ label: 'Aviso Urgente?', defaultValue: false }),
        body: fields.document({ label: 'Mensagem (Corpo do Texto)', formatting: true }),
      },
    }),

    // 2. CULTOS
    cultos: collection({
      label: 'Horários dos Cultos',
      slugField: 'nome',
      path: 'src/content/cultos/*',
      format: { contentField: 'descricao_longa' },
      schema: {
        nome: fields.slug({ name: { label: 'Nome do Culto' } }),
        dia: fields.select({
          label: 'Dia da Semana',
          options: [
            { label: 'Domingo', value: 'Domingo' },
            { label: 'Segunda', value: 'Segunda' },
            { label: 'Terça', value: 'Terça' },
            { label: 'Quarta', value: 'Quarta' },
            { label: 'Quinta', value: 'Quinta' },
            { label: 'Sexta', value: 'Sexta' },
            { label: 'Sábado', value: 'Sábado' },
          ],
          defaultValue: 'Domingo',
        }),
        descricao: fields.text({ label: 'Descrição Curta' }),
        horarios: fields.array(
          fields.object({
            rotulo: fields.text({ label: 'Rótulo (Ex: Culto Principal)' }),
            hora: fields.text({ label: 'Hora (Ex: 19:30)' }),
          }),
          { label: 'Horários do Culto', itemLabel: props => props.fields.rotulo.value || 'Novo Horário' }
        ),
        // Campo escondido apenas para forçar a criação do ficheiro .md
        descricao_longa: fields.document({ label: 'Anotações (Opcional)' }),
      },
    }),

    // 3. EVENTOS
    eventos: collection({
      label: 'Eventos e Retiros',
      slugField: 'titulo',
      path: 'src/content/eventos/*',
      format: { contentField: 'descricao' },
      schema: {
        titulo: fields.slug({ name: { label: 'Nome do Evento' } }),
        tag: fields.text({ label: 'Categoria / Tag (Ex: Retiro)' }),
        data: fields.text({ label: 'Data do Evento (Ex: 15 a 17 de Outubro)' }),
        local: fields.text({ label: 'Local' }),
        imagem: fields.image({
          label: 'Imagem / Banner',
          directory: 'public/images/uploads',
          publicPath: '/images/uploads/',
        }),
        descricao: fields.document({ label: 'Descrição e Detalhes', formatting: true }),
      },
    }),
  },
});
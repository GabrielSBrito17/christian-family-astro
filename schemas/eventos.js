/*export default {
    name: 'culto',
      title: 'Agenda de Cultos',
        type: 'document',
          fields: [
              {
                    name: 'nome',
                          title: 'Nome do Culto',
                                type: 'string',
                                      validation: Rule => Rule.required()
                                          },
                                              {
                                                    name: 'dia',
                                                          title: 'Dia da Semana',
                                                                type: 'string',
                                                                      options: {
                                                                              list: [
                                                                                        {title: 'Domingo', value: 'Domingo'},
                                                                                                  {title: 'Segunda-feira', value: 'Segunda-feira'},
                                                                                                            {title: 'Terça-feira', value: 'Terça-feira'},
                                                                                                                      {title: 'Quarta-feira', value: 'Quarta-feira'},
                                                                                                                                {title: 'Quinta-feira', value: 'Quinta-feira'},
                                                                                                                                          {title: 'Sexta-feira', value: 'Sexta-feira'},
                                                                                                                                                    {title: 'Sábado', value: 'Sábado'},
                                                                                                                                                            ]
                                                                                                                                                                  },
                                                                                                                                                                        validation: Rule => Rule.required()
                                                                                                                                                                            },
                                                                                                                                                                                {
                                                                                                                                                                                      name: 'horario',
                                                                                                                                                                                            title: 'Horário (ex: 18h00)',
                                                                                                                                                                                                  type: 'string',
                                                                                                                                                                                                        validation: Rule => Rule.required()
                                                                                                                                                                                                            },
                                                                                                                                                                                                                {
                                                                                                                                                                                                                      name: 'linkTransmissao',
                                                                                                                                                                                                                            title: 'Link de Transmissão (Opcional)',
                                                                                                                                                                                                                                  type: 'url',
                                                                                                                                                                                                                                        description: 'Link do YouTube ou Facebook se o culto for transmitido.'
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                              ]
                                                                                                                                                                                                                                              }
}
*/
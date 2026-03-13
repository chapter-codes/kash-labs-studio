import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectDescription',
      type: 'string',
    //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of:[{type:'string'}],
      validation:(rule)=>rule.required()
    }),
    defineField({
      name: 'projectLink',
      type: 'string',
      validation:(rule)=>rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation:(rule)=>rule.required()
    }),
        defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'showProjectName',
      type: 'boolean',
      readOnly: true,
      initialValue: ({document}) => {
        return !document?.projectDescription
      }
    })
    // defineField({
    //   name: 'body',
    //   type: 'array',
    //   of: [{type: 'block'}],
    // }),
  ],
})
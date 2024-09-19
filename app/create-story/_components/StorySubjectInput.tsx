import { Textarea } from '@nextui-org/input'
import { input } from '@nextui-org/theme'
import React from 'react'

function StorySubjectInput({userSelection}:any) {
  return (
    <div>
        <label className='font-bold text-4xl text-primary'>1. Tema de la historia</label>
        <Textarea
        placeholder='Escribe el tema de la historia que quieres generar.'
        size='lg'
        classNames={{
            input: "resize-y min-h-[230px] text-2xl p-5"
        }} 
        className="mt-3 max-w-lg"
        onChange={(e) => userSelection({
            fieldValue:e.target.value,
            fieldName:"storySubject"
        })}/>
    </div>
  )
}

export default StorySubjectInput
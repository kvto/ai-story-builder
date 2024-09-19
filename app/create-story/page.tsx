"use client"
import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'


export interface fieldData{
  fieldName:string,
  fieldValue:string
}

export interface formDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string,
  ageGroup:string
}

function CreateStory() {

  const [formData, setFormData]=useState<formDataType>();
  const onHandlUserSelection=(data:fieldData)=>{
    setFormData((prev:any)=>({
      ...prev,
      [data.fieldName]:data.fieldValue
    }))
    console.log(formData)
  }

  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>
        CREA TU HISTORIA
      </h2>
      <p className='text-2xl text-primary text-center'>Libera tu creatividad con IA: ¡crea historias como nunca antes! Deja que nuestra IA dé vida a tu imaginación, una historia a la vez</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        <StorySubjectInput userSelection={onHandlUserSelection}/>
        <StoryType userSelection={onHandlUserSelection}/>
        <AgeGroup userSelection={onHandlUserSelection}/>
        <ImageStyle userSelection={onHandlUserSelection}/>
      </div>

      <div className='flex justify-end my-1'>
        <Button color='primary' className='p-10 text-2xl'>Generar historia</Button>
      </div>
    </div>
  )
}

export default CreateStory
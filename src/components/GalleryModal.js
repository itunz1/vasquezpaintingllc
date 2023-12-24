import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function GalleryModal({ pic }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div onClick={onOpen} className='relative'>
            <div className='cursor-pointer rounded-[15px] '>
                <img className='rounded-[15px]' src={pic} alt='company photo' />
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="3xl"
                scrollBehavior='inside'
                placement='center'
                classNames={{
                    closeButton: "text-white text-xl bg-black font-bold hover:bg-white hover:text-black active:bg-white/10",
                  }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <img src={pic} alt="company photo" />
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default GalleryModal
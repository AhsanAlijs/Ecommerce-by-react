
import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
const Contacts = () => {
    return (
        <>
            <div className='bg-[#fff] h-[90vh]'>
                <Card color="transparent" shadow={false} className='flex items-center justify-center'>
                    <Typography variant="h4" color="blue-gray">
                        Contact US
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to Contact Me
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Jhon"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                               Message
                            </Typography>
                            <Textarea
                                type="text"
                                size="lg"
                                placeholder="Message"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <Button className="mt-6" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Contacts
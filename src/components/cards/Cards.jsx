import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Cards = ({ src, title, price, description, id }) => {

    const navigate = useNavigate()

    const singleProductPage = () => {
        navigate(`/singleProduct/${id}`)
    }

    return (
        <>
            <div>
                <Card className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src={src}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-semibold">
                                {`${title.slice(0, 30)}...`}
                            </Typography>
                            <Typography color="blue-gray" className="font-semibold">
                                {price}
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold opacity-80"
                        >
                            {`${description.slice(0, 70)}...`}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            onClick={singleProductPage}
                        >
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Cards
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
const Single = ({src , title , description , price , category}) => {
    const navigate = useNavigate()
    const Back =()=>{
        navigate('/products')
    }
    return (
        <>
            <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={src}
                        alt="card-image"
                        className="h-full w-full object-cover p-[5px]"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        {category}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                       {title}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                       {price}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                       {description}
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2 bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] hover:border" onClick={Back}>
                            Go Back
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </>
    )
}

export default Single
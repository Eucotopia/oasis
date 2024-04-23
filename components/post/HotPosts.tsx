import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image"
import React from "react";
import {Button} from "@nextui-org/react";

const Posts = [
    {
        id: 0,
        cover: "https://images.pexels.com/photos/632327/pexels-photo-632327.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "1"
    },
    {
        id: 1,
        cover: "https://images.pexels.com/photos/6159073/pexels-photo-6159073.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "1"
    },
    {
        id: 2,
        cover: "https://images.pexels.com/photos/139806/pexels-photo-139806.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "1"
    },
    {
        id: 3,
        cover: "https://images.pexels.com/photos/3849373/pexels-photo-3849373.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "1"
    },
    {
        id: 4,
        cover: "https://images.pexels.com/photos/234286/pexels-photo-234286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "1"
    },
]
export default function PostGallery() {
    const [selectedPost, setSelectedPost] = React.useState(Posts[0]);

    const handleSelectPost = (id: number) => {
        setSelectedPost(Posts.find((post) => post.id === id) || Posts[0]);
    };

    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="shadow-2xl p-2"
        >
            <Image
                alt="Woman listing to music"
                src={selectedPost.cover}
                width={400}
                className={"object-cover"}
                height={200}
            />
            <CardBody>
                <h1>{selectedPost.title}</h1>
            </CardBody>
            <CardFooter>
                {Posts.map((post, index) => (
                    <div key={index}>
                        <p>{post.title}</p>
                        <Button
                            variant="flat"
                            color="default"
                            radius="lg"
                            size="sm"
                            onClick={() => handleSelectPost(post.id)}
                        >
                            {post.id}
                        </Button>
                    </div>
                ))}
            </CardFooter>
        </Card>
    );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BlogDetail({ params }) {
    const blogPost = {
        title: "The Symbolism of Cars in Dreams",
        content: [
            {
                subtitle: "Seeing a Car in a Dream",
                description: "Seeing a car in a dream may be related to a desire to embark on a new journey or make a change. This dream might indicate that you're entering a new phase in your life or that you're dissatisfied with your current situation. Additionally, seeing a car in a dream can also represent a desire for freedom and independence.",
            },
            {
                subtitle: "Driving a Car",
                description: "Driving a car in a dream shows that you're in control and determining your direction in life. This dream might indicate increased determination and self-confidence, and that you're taking the necessary steps to achieve your goals in life. Moreover, driving a car in a dream can also represent your ability to take responsibility and lead.",
            },
            {
                subtitle: "Getting into a Car",
                description: "Getting into a car in a dream may be related to a desire to embark on a new journey or make a change. This dream might indicate that you're entering a new phase in your life or that you're dissatisfied with your current situation. Additionally, getting into a car in a dream can also represent feeling under the control of others or acting under the guidance of others.",
            },
        ],
        image: "https://dreamybot.com/wp-content/uploads/sites/7/2024/06/Angel3.webp"
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Link href="/dictionary">
                <Button variant="outline" className="mb-6 flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dictionary
                </Button>
            </Link>
            <Card className="w-full shadow-xl">
                <CardHeader className="bg-gray-100 dark:bg-gray-800 p-6">
                    <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                        {blogPost.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="relative w-full h-64 md:h-96 mb-8">
                        <Image
                            src={blogPost.image}
                            alt={blogPost.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="prose max-w-none dark:prose-invert">
                        {blogPost.content.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{section.subtitle}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{section.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex flex-col sm:flex-row w-full gap-4 justify-between">
                            <Link href="/dictionary" className="flex-grow sm:flex-grow-0">
                                <Button variant="outline" className="w-full">
                                    Explore More Dream Symbols
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button className="flex-grow sm:flex-grow-0">
                                    Get Personalized Dream Analysis
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
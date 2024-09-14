import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Dictionary({ searchParams }) {
    const currentLetter = searchParams.alphabet || "";
    const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const dreamSymbols = [
        { title: "Child", description: "Reflects emotions or cleansing. Water in dreams can symbolize the state of your emotional well-being, with calm waters representing peace and turbulent waters signifying emotional turmoil. It may also indicate a need for emotional or spiritual purification.", image: "https://dreamybot.com/wp-content/uploads/sites/7/2024/06/Baby3.webp" },
        { title: "Flying", description: "Represents freedom or escape. Flying dreams often signify a desire for liberation from current constraints or responsibilities. They can also indicate a sense of empowerment, achievement, or a new perspective on life.", image: "https://dreamybot.com/wp-content/uploads/sites/7/2024/06/Airplane3.webp" },
        { title: "Dog", description: "Suggests avoiding a problem. Being chased in a dream often represents running away from an issue or emotion in your waking life. It can also indicate feelings of pressure or a fear of confrontation. Understanding what's chasing you can provide insights into unresolved conflicts or anxieties.", image: "https://dreamybot.com/wp-content/uploads/sites/7/2024/08/Dog3.webp" },
        { title: "Angel", description: "Indicates loss of control. This common dream often reflects feelings of insecurity or anxiety in waking life. It may also symbolize a fear of failure or a sense of powerlessness in a particular situation.", image: "https://dreamybot.com/wp-content/uploads/sites/7/2024/06/Angel3.webp" },
    ];

    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="py-8 md:py-12 lg:py-16">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-8">Dream Dictionary</h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-8 lg:mb-8">Explore common dream symbols and their meanings</p>
                </div>
                <div className="mb-8">
                    <Input
                        type="text"
                        placeholder="Search dream..."
                        className="w-full max-w-2xl mx-auto text-sm md:text-md h-12"
                    />
                </div>
                <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-8 md:mb-10 lg:mb-12">
                    {englishAlphabet.map((letter) => (
                        <Link key={letter} href={`/dictionary${currentLetter === letter ? '' : `?alphabet=${letter}`}`}>
                            <Button
                                variant={currentLetter === letter ? "default" : "outline"}
                                className="w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm"
                            >
                                {letter}
                            </Button>
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {dreamSymbols.map((symbol, index) => (
                        <Link href={`/dictionary/details/${symbol.title.toLowerCase()}`} key={index}>
                            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                                <CardHeader className="p-0">
                                    <Image src={symbol.image} alt={symbol.title} width={300} height={300} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg" />
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow p-4">
                                    <CardTitle className="text-lg md:text-xl mb-2 mt-2 md:mt-4">{symbol.title}</CardTitle>
                                    <CardDescription className="flex-grow overflow-hidden text-ellipsis text-sm md:text-base">
                                        <span className="line-clamp-3">{symbol.description}</span>
                                    </CardDescription>
                                    <Button variant="outline" className="mt-3 md:mt-4 w-full text-sm md:text-base">
                                        Unlock Dream Insights
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

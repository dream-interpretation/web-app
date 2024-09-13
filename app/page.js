import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container px-4 mx-auto" style={{ minHeight: 'calc(100vh - 65px - 45px)' }}>
      <div className="py-12 md:py-16">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">What are your dreams telling you?</h1>
          <p className="text-sm md:text-lg text-gray-600 mb-8">Share your dream for a free, in-depth analysis.</p>
          <div className="animate-bounce" style={{ animation: 'bounce 3s infinite' }}>
            <Image
              src="/roboto.png"
              alt="Cute Robot"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Card className="w-full max-w-[800px] mx-auto">
          <CardContent className="space-y-6 p-6 md:p-8">
            <Card className="bg-gray-100 dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-600 dark:text-gray-200 text-sm md:text-base">DreamyBot 🤖</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">Welcome to DreamyBot. Share your dream with me and I'll do my best to interpret it for you! The more detail you can provide, the better.</p>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card className="bg-purple-50 dark:bg-purple-900 w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-purple-600 dark:text-purple-200 text-sm md:text-base text-right">Dreamer 😴 </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-purple-500 dark:text-purple-300 text-sm md:text-base text-right">I was lost in a dark forest, but suddenly I saw a bright light in the distance. As I walked towards the light, an old man appeared and handed me a book. The pages of the book were blank, but as I touched them, words began to appear.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-600 dark:text-gray-200 text-sm md:text-base">DreamyBot 🤖</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base">What a captivating adventure! It sounds like you experienced quite a journey in that dream. Walking through a dark forest often represents feelings of uncertainty or confusion in waking life, while the bright light symbolizes hope, clarity, or a guiding force leading you to a better understanding of yourself or your situation. </p>
                </CardContent>
              </Card>
            </div>
            <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Input
                type="text"
                placeholder="Share your dream..."
                className="flex-grow h-12 sm:h-14"
              />
              <Button type="submit" className="h-12 sm:h-14 px-6 sm:px-10 w-full sm:w-auto">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

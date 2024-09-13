import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container px-4 mx-auto" style={{ minHeight: 'calc(100vh - 65px - 45px)' }}>
      <div className="py-8 md:py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">What are your dreams telling you?</h1>
          <p className="text-sm md:text-lg text-gray-600 mt-4 md:mt-6">Share your dream for a free, in-depth analysis.</p>
          <div className="mt-8 animate-bounce" style={{ animation: 'bounce 3s infinite' }}>
            <Image
              src="/robot.png"
              alt="Cute Robot"
              width={200}
              height={200}
            />
          </div>
        </div>
        <Card className="w-full max-w-[700px] mx-auto mt-8 md:mt-8">
          <CardContent className="space-y-4 p-4 md:p-8">
            <Card className="bg-gray-100 dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-600 dark:text-gray-200 text-xs md:text-sm">DreamyBot 🤖</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-500 dark:text-gray-300 text-xs md:text-sm">Welcome to DreamyBot. Share your dream with me and I'll do my best to interpret it for you! The more detail you can provide, the better.</p>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Card className="bg-purple-50 dark:bg-purple-900 w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-purple-600 dark:text-purple-200 text-xs md:text-sm text-right">Dreamer 😴 </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-purple-500 dark:text-purple-300 text-xs md:text-sm text-right">I was lost in a dark forest, but suddenly I saw a bright light in the distance. As I walked towards the light, an old man appeared and handed me a book. The pages of the book were blank, but as I touched them, words began to appear.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-100 dark:bg-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-600 dark:text-gray-200 text-xs md:text-sm">DreamyBot 🤖</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-500 dark:text-gray-300 text-xs md:text-sm">What a captivating adventure! It sounds like you experienced quite a journey in that dream. Walking through a dark forest often represents feelings of uncertainty or confusion in waking life, while the bright light symbolizes hope, clarity, or a guiding force leading you to a better understanding of yourself or your situation. </p>
                </CardContent>
              </Card>
            </div>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="text"
                placeholder="Share your dream..."
                className="flex-grow h-10 sm:h-12"
              />
              <Button type="submit" className="h-10 sm:h-12 px-4 sm:px-8 w-full sm:w-auto">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

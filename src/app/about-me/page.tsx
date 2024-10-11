import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import image1 from "@/app/assets/image1.png"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="p-5">
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Jiaxu
                </CardTitle>
                <CardDescription>
                    I like to shop
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={image1} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Jiaxu
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to shop</div>
            </CardContent>
        </Card>
        <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription>this is an alert</AlertDescription>
        </Alert>
    </div>
  );
}
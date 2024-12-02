
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription >
          Enter your email login and password to create new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="login">Login</Label>
            <Input
              id="login"
              type="login"
              placeholder="login"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">New Password</Label>
              
            </div>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              
            </div>
            <Input id="confirmPassword" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <Button variant="outline" className="w-full">
            Sign in with Google 
            <Image
              src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
              alt=""
              height={18}
              width={18}
            />
          </Button>
        </div>
        
      </CardContent>
    </Card>
  )
}
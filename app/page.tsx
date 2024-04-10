import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">🔐 Auth</h1>
        <p className="text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="default">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

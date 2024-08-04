import { useAuthContext } from "@/contexts";
import { useSignInMutation } from "@/hooks/requests.hook";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function LoginScreen(): JSX.Element {
  const router = useRouter();
  const { accessToken, signIn } = useAuthContext();

  const [loginCredentials, setLoginCredentials] = useState({
    Username: "",
    Password: "",
  });

  const { mutateAsync, isPending } = useSignInMutation();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ): void => {
    setLoginCredentials({ ...loginCredentials, [key]: event.target.value });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    try {
      event.preventDefault();
      const { accessToken: token } = await mutateAsync({ ...loginCredentials });

      const { username } = jwt.decode(token) as {
        [key: string]: string;
      };

      signIn(token, username);

      if (token) {
        router.push("/");
      }
    } catch (error) {
      toast.error("Usuário ou senha inválidos");
    }
  };

  useEffect(() => {
    if (accessToken) {
      router.push("/");
    }
  }, [accessToken, router]);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-primary-500 dark:bg-gray-900 gap-4 px-4 md:px-0">
      <Image
        width={154}
        height={63}
        src="https://static.wixstatic.com/media/8e4420_e836a94190814e62aebc479d2cad1c33~mv2.png/v1/crop/x_0,y_0,w_817,h_336/fill/w_154,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Radix%20Engineering.png"
        alt="Radix Engineering Logo"
      />
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg p-8">
        <CardBody className="overflow-hidden">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="Username"
              className="w-full"
              isRequired
              label="E-mail"
              placeholder="E-mail"
              type="email"
              onChange={(event) => handleChange(event, "Username")}
            />
            <Input
              name="Password"
              isRequired
              label="Senha"
              placeholder="Senha"
              type="password"
              onChange={(event) => handleChange(event, "Password")}
            />
            <div className="flex gap-2 justify-end">
              <Button
                type="submit"
                fullWidth
                className="bg-primary-500 text-white"
                isLoading={isPending}
              >
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

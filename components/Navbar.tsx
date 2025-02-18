import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { login, logout, authenticated, user } = usePrivy();

  const handleAuth = () => {
      if (authenticated) {
        logout();
      } else {
        login();
      }
  }

  return (
    <>
      <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/Logo-2.png"}
            alt="Hash-Hive Logo"
            width={90}
            height={80}
            priority
            className="rounded-2xl"
          />

          {/* <span className='text-2xl font-extrabold flex flex-col items-end rounded-xl px-3'>
                    <span className='border-b-2 border-white'>Hash</span>
                    <span>Hive</span>
                </span> */}
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href={"/dashboard"}
            className="text-foreground hover:text-primary cursor-pointer"
          >
            Dashboard
          </Link>

          <Link
            href={"/search"}
            className="text-foreground hover:text-primary cursor-pointer"
          >
            Search
          </Link>

          <Link
            href={"/docs"}
            className="text-foreground hover:text-primary cursor-pointer"
          >
            Docs
          </Link>

          <Button onClick={handleAuth} variant={"outline"}>
            {authenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </>
            )}
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

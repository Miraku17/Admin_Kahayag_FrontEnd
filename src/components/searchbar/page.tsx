"use client"
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bell, Moon, Info, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SearchBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-800 px-3 py-2 shadow-md rounded-full">
      <nav className="flex items-center justify-between">
        <div className="flex-1 max-w-sm relative">
          <Input
            type="search"
            placeholder="Search"
            className="w-full rounded-full bg-[#f4f7fe] dark:bg-gray-700 pl-10 outline-none border-none ring-0 focus:ring-0"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400 dark:text-gray-300" />
        </div>
        <div className="flex items-center space-x-4 px-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
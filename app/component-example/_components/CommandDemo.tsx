"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";

export function CommandDemo() {
  const usersQuery = useQuery({
    queryKey: ["all-users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="border-green-500 bg-green-950 text-white hover:bg-green-700 hover:text-white"
        >
          Open Command
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Check the user list..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Name">
              {usersQuery.data?.map((user: User) => (
                <CommandItem key={user.userId}>
                  <span>
                    {user.first_name} {user.last_name}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Emails">
              {usersQuery.data?.map((user: User) => (
                <CommandItem key={user.userId}>
                  <span>{user.email}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

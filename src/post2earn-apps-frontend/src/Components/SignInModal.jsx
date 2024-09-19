import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
 
export default function SignInModal() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen}>Sign in</Button>
        <Dialog size="xs" open={open} handler={handleOpen}>
            <DialogHeader className="justify-between">
            <div>
                <Typography variant="h5" color="blue-gray">
                Sign in
                </Typography>
                <Typography color="gray" variant="paragraph">
                Choose which card you want to connect
                </Typography>
            </div>
            <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={handleOpen}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </IconButton>
            </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5">
          <div className="mb-6">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-3 font-semibold uppercase opacity-70"
            >
              Popular
            </Typography>
            <ul className="-ml-2 mt-3 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  Connect with MetaMask
                </Typography>
              </MenuItem>
              
            </ul>
          </div>
         
        </DialogBody>
        <DialogFooter className="justify-between gap-2">
          <Button variant="outlined" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
 

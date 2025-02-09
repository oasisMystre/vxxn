import { object, string } from "yup";
import { Plus } from "lucide-react";
import { Form, Formik } from "formik";

import Input from "../../components/Input";
import Navigation from "../../components/layout/Navigation";
import VideoEmptyState from "../../components/emptystate/VideoEmptyState";

export default function UploadPage() {
  return (
    <main className="flex-1 flex flex-col p-4">
      <div className="flex-1 relative flex flex-col space-y-8 bg-black rounded-xl">
        <Navigation className="relative" />
        <div className="mx-auto flex flex-col space-y-8">
          <Formik
            initialValues={{ url: "" }}
            validationSchema={object({
              url: string().url().required(),
            })}
            onSubmit={() => {}}
          >
            <Form className="flex  space-x-4">
              <Input
                className="min-w-xl"
                placeholder="Enter video URL (YouTube, Twitch, etc.)"
              />
              <button
                type="submit"
                className="flex items-center space-x-4 !bg-dark px-4 py-2 rounded-md"
              >
                <Plus className="size-5" />
                <span className="text-sm">Add Video</span>
              </button>
            </Form>
          </Formik>
          <VideoEmptyState />
        </div>
      </div>
    </main>
  );
}

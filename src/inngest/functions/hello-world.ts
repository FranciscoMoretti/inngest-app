import { inngest } from "@/inngest/inngest.client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", name: "Hello World" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-for-a-bit", "3s");
    return { event, body: event.data.message };
  }
);

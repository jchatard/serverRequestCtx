import { type APIEvent, json } from "solid-start/api";
import server$ from "solid-start/server";

export async function GET({ params }: APIEvent) {
  const foo = "foo";
  const bar = aServerFunc();
  return json(foo + bar);
}

const aServerFunc = server$(() => {
  return " bar (from server)";
})
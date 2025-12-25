import { define } from "../utils.ts";

export const handler = define.handlers({
  GET(_ctx) {
    return new Response(null, {
      status: 307,
      headers: { location: "/" },
    });
  },
});

export default define.page(function NotFoundPage() {
  return null;
});

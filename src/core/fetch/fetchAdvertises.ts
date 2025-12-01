import karpardazAPI from "../../api-config";

export async function fetchAdvertises(offset?: number, limit?: number) {
  const res = await karpardazAPI.get(
    `/advertisements/?offset=${offset ? offset : 0}&limit=${limit ? limit : 10}`
  );

  const data = await res.data;

  return data;
}

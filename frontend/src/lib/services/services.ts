import type { ResponseData } from "$lib/global";
import axios from "axios";

export async function handleRequest(form: HTMLFormElement): Promise<ResponseData> {
  return axios({
    method: form.getAttribute('method') as string,
    url: form.action,
    data: form,
    withCredentials: true
  }).then(res => res.data);
}

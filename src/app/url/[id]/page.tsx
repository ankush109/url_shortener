import React, { FC } from "react";
import URLShortenerService from "../../services/URLshortenerService";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
interface redirectUrlProps {
  params: {
    id: string;
  };
}
const redirectUrl: FC<redirectUrlProps> = async ({ params: { id } }) => {
  const UrlService = new URLShortenerService();
  const resp = await UrlService.getUrlById(id);
  console.log(resp, "res");

  redirect(resp?.originalUrl! as string);

  return null;
};

export default redirectUrl;

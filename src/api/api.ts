import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:44093';

type SendEmailResponse = {
  message: string | null,
}

export default {
  // eslint-disable-next-line max-len
  getSendEmailResponse: async function(title: string, senderEmail: string, description: string): Promise<AxiosResponse<SendEmailResponse>> {
    return await axios.request<SendEmailResponse>({
      method: 'POST',
      url: `/sendEmail`,
      baseURL: BASE_URL,
      data: {
        title: title,
        senderEmail: senderEmail,
        description: description,
      },
    });
  },
};

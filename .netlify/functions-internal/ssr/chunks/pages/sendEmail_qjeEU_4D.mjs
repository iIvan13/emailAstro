import { Resend } from 'resend';

const resend = new Resend("re_7pE2L28a_wmDDVBRPa2417hnsXJCeYYYb");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text
  });
  if (data) {
    return new Response(
      JSON.stringify({
        message: data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

export { POST };

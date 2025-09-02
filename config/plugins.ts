export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env.int('SMTP_PORT'),
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        secure: true, // true pour port 465, false pour 587
      },
      settings: {
        defaultFrom: 'contact@frenchtour.okodev.fr',
        defaultReplyTo: 'contact@frenchtour.okodev.fr',
      },
    },
  },
});

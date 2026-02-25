
const PORT = process.env.PORT || process.env.NEXT_PUBLIC_PORT || 5173;
/**
 * На выходе должно получиться `https://example.com`
 *
 * HOST_NAME="example.com"
 * @property subDomain
 */
export const getDomain = (subDomain?: string) => {
  return `https://${getDomainName(subDomain)}`;
};

/**
 * На выходе должно получиться `example.com`
 *
 * HOST_NAME="example.com"
 * @property subDomain
 */
export const getDomainName = (subDomain?: string) => {
  const domain = process.env.HOST_NAME || process.env.NEXT_PUBLIC_HOST_NAME || "yz13.dev";
  if (!subDomain) return `${domain}`;
  return `${subDomain}.${domain}`;
};

/**
 * Функция для получения ссылки с текущим доменом
 *
 * Для изменения домена необходимо изменить `HOST_NAME` в .env
 *
 * На выходе получится экземпляр строка с ссылкой
 *
 * @example https://example.com
 * @example https://subDomain.example.com
 * @example https://subDomain.example.com/:path
 *
 * @property path
 * @property subDomain
 */
export const getURL = (path: string, subDomain?: string) => {
  return new URL(path, getDomain(subDomain)).toString();
};

/**
 * На выходе должно получиться `{sub_domain}-status.example.com`
 *
 * HOST_NAME="example.com"
 * @property subDomain
 */
export const getStatusPageDomain = (sub_domain: string) => getDomainName(`${sub_domain}-status`)


export const getStatusPageURL = (sub_domain: string) => `https://${getStatusPageDomain(sub_domain)}`

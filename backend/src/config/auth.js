const fifteenMinutes = 15 * 60 * 1000;

function durationToMilliseconds(value) {
  if (/^\d+$/.test(value)) {
    return Number(value) * 1000;
  }

  const match = /^(\d+)\s*(ms|s|m|h|d)$/.exec(value);
  if (!match) {
    throw new Error('JWT_EXPIRES_IN must be a number of seconds or a duration such as 1d');
  }

  const units = { ms: 1, s: 1000, m: 60 * 1000, h: 60 * 60 * 1000, d: 24 * 60 * 60 * 1000 };
  return Number(match[1]) * units[match[2]];
}

export const authConfig = {
  cookieName: process.env.COOKIE_NAME || 'club_apex_auth',
  expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  cookieMaxAge: durationToMilliseconds(process.env.JWT_EXPIRES_IN || '1d'),
  loginRateLimit: { windowMs: fifteenMinutes, max: 5 },
};

export function cookieOptions() {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
  };
}

import { Done } from '@as/shared'

export function isRaycastUnblockRequest() {
  return $request.headers['x-raycast-unblock']
}

export function unblockRequest() {
  if ($request.headers['x-raycast-unblock']) {
    console.log('Raycast Unblock request')
    return Done({
      headers: {
        ...$request.headers,
        'x-raycast-unblock': undefined,
      },
    })
  }
  return Done({
    url: $request.url.replace(
      'https://backend.raycast.com',
      'https://raycast.baysonfox.com',
    ),
    headers: $request.headers,
    body: $request.body,
  })
}

import { useEffect, useState } from "react";

export const useClient = (): boolean => {
  const [isClient, setIsClient] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  })

  return isClient
}

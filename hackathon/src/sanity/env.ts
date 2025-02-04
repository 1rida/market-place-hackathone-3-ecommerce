export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-16'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skzwRrqpoKLqyBebSaqmCWbiUuDztL1ivoGqVuItzricvR7pNWhhJK8FJFRWfYEq4nXMJg5x9YhZxSg4agcmmEb81D9wVqXlnaJjsXp0cRfyKZp9SaRprMeKGwiGtHFm5dBCyxTstKoXY0Ck807FxlrQuiV1gB8ITGmELPI0U3mMPMTbcFw3",
  'Missing environment variable:SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

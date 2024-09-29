import { useMutation, useQueryClient } from '@tanstack/react-query'


export default function useMutationWishlist(fn) {
    
  return useMutation({mutationFn:fn})
}
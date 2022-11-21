import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  listStudyCycles,
  postStudyCycle
} from '../services/study-cycle.service';

export default function useStudyCycles () {
  const queryClient = useQueryClient();

  const {
    data: studyCycles,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError
  } = useQuery({
    queryKey: ['studyCycles'],
    queryFn: listStudyCycles
  });

  const {
    mutate: createStudyCycle,
    isError: isPostError,
    isLoading: isPostLoading,
    error: postError
  } = useMutation({
    mutationFn: ({ data, token }) => postStudyCycle(data, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyCycles'] });
    }
  });

  const get = {
    studyCycles,
    isGetError,
    isGetLoading,
    getError

  };

  const post = {
    createStudyCycle,
    isPostError,
    isPostLoading,
    postError
  };

  return {
    get,
    post
  };
}

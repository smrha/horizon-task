from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.response import Response

import random as rd

@api_view()
@permission_classes((permissions.AllowAny,))
def game(request):
    # diff randomly select between 6 and 12
    diff = (rd.randint(1, 2)*6)
    # arr_size randomly select betwee 5 and 10
    arr_size = (rd.randint(1, 2)*5)
    # def 2 array
    array_1 = []
    array_2 = []

    for i in range(arr_size):
        array_1.append(rd.randint(1, 99))
        array_2.append(array_1[i]+diff)
    
    rd.shuffle(array_2)

    if rd.randint(0, 1):
        context = {
            'diff': diff,
            'arr_size': arr_size,
            'array_1': array_1,
            'array_2': array_2
            }
    else:
        context = {
            'diff': diff,
            'arr_size': arr_size,
            'array_1': array_2,
            'array_2': array_1
            }
    return Response(context)
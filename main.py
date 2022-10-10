class ApiGetWorkers(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kargs):
        token = request.auth
        if token:
            token = Token.objects.filter(key=token).first()
            worker = Worker.objects.filter(user=token.user).first()
            if Worker.objects.filter(user=token.user):
                # unknownUsers = Worker.objects.filter(subdivision=worker.subdivision).filter(branch=worker.branch,email_check=True).filter(~Q(user=worker.user)).filter(status='null')
                unknownUsers = Worker.objects.filter(Q(status='null')).filter(email_check=True, subdivision=request.user.profile.subdivision, branch=request.user.profile.branch).order_by('-status').all()
                workers = Worker.objects.filter(subdivision=worker.subdivision).filter(branch=worker.branch,email_check=True).filter(Q(status=7) | Q(status=8))
                # leadergroupworkers = Worker.objects.filter(subdivision=worker.subdivision).filter(branch=worker.branch).filter(~Q(user=worker.user)).filter(status=8)
                branches = Branch.objects.all()
            else:
                return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)

        serializer = WorkerSerializer(workers, many=True)
        # serializer1 = WorkerSerializer(leadergroupworkers, many=True)
        serializer2 = BranchSerializer(branches, many=True)
        serializer3 = WorkerSerializer(unknownUsers, many=True)

        return Response({'unknown':serializer3.data,
                        'workers': serializer.data,
                        # 'leader_group_workers': serializer1.data, 
                        'lab_work_branches': serializer2.data})
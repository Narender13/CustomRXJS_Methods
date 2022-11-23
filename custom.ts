import {tap, filter, defer,operatorFunction,Observable,mergeMap,combineLatestWith,first,from,groupBy,map,toArray,UnaryFunction,pipe} from 'rxjs';

export function groupByMap<T, K, R>(
    key: (value: T) => K,
    project: (value: [T, T[]], index: number) => R
): UnaryFunction<Observable<T[]>, Observable<R[]>> {
    return pipe(
        mergeMap(x =>
            from(x).pipe(
                groupBy(group =>
                    group.pipe(
                        first(),
                        combineLatestWith(group.pipe(toArray())),
                        map(project),
                    )),
                toArray()


            ))


    );
}

export function filterNullish<T>():UnaryFunction<Observable<T | null | undefined>,Observable<T>>{
    return pipe(
        filter(x=> x != null) as operatorFunction<T | null | undefined,T>
    );
}

export function prepare<T>(callback:()=> void):(source:Observable<T>)=> Observable<T>{
return (source:Observable<T>):Observable<T>=> defer(()=>{
callback();
    return source;
})


<--------------------interceptor---------------------------->
    
    const requestTracker$$ = new BevahiorSubject<booela>(false)
    this.appstateRepo.trackRequest(requestTracker$$);
    return next.handdle(apiReq).pipe(
        finalize(()=> {
        requestTracker$$.next(true);
        requestTracker$$.complete();
        })
        
<----------------------repo------------------------------>
        private tracker$$ = new BehaviourSubject<BehaviourSubject<boolean>[]>([]);
        isloading = store.pipe(select((state)=> state.isloading)
                           
        private trackRequest(request: BehaviorSuject<Boolean>){
         const tracker = this.trackers$$;
          this.trackers$$.next([...tracker.getValue(),request])
           }
    )
   this.trackers$$.pipe(
       takeUntil(this.destroy$),
       filter(arr=> arr.lengh > 0),
       map(arr => folkJoin({...arr.filter(x => !x.getValue())}),
       tap(_ => this.setloadingState(true)),
       switchMap(tack => tack))
       .subscribe(_ => {
           this.trackers.next([]);
           this.setLoadingState(false)
                 
       } )
   
   
   )

}

setLoadingState(isLoading:boolean){
 store.update(state => ({
     ...state,
     isLoading
     )
}
      pipe(prepare(()=> subject.next(true),
     finalize(()=> subject.next(false) )
            )

groupByMap(
    x=> x. arraved,////key for grouping
    ([first,grouped]=> {
        first.noofContainers = grouped.reduces((sum,current)=> sum + current)
        return first;
    })


}


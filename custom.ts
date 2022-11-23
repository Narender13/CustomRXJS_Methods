import {tap, filter, operatorFunction,Observable,mergeMap,combineLatestWith,first,from,groupBy,map,toArray,UnaryFunction,pipe} from 'rxjs';

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

groupByMap(
    x=> x. arraved,////key for grouping
    ([first,grouped]=> {
        first.noofContainers = grouped.reduces((sum,current)=> sum + current)
        return first;
    })


}


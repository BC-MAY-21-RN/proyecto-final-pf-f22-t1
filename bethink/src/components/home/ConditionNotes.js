import {LoadingNotes} from './LoadingNotes';
import {LoveNotes} from './LoveNotes';
import {NoLoves} from './NoLoves';

export const ConditionNotes = ({notesLoveIt, loadingNotes}) => {

    return(
        <>
        {loadingNotes ? (
            <LoadingNotes />
          ) : notesLoveIt.length > 0 ? (
            <LoveNotes notes={notesLoveIt} />
          ) : (
            <NoLoves />
          )}
        </>
    )
}
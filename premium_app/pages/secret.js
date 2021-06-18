import {useState, useEffect} from 'react';
import {useSession} from 'next-auth/client'
import Link from 'next/link';

export default function Secret(){
    const [session, loading] = useSession();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/api/secret");
            const json = await res.json();
            if(json.content){
                setContent(json.content);
            }
        }
        fetchData();
    }, [session]);

    if(typeof window !== "undefined" && loading) return null;

    if(!session){
        return (
            <main>
                <h2>You first need to sign in.</h2>
                <Link href='/login'>
                    <button >Sign In Here</button>
                </Link>
            </main>
        );
    }
    return (
        <main>
            <div>
                <h1>Protected Page</h1>
                <p>{content}</p>
            </div>
        </main>
    )
}
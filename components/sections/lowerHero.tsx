import { Button } from '@/components/ui/button'



export function LowerHero() {

    return (

    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9FAFB] text-gray-800">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to elevate your packaging?</h2>
          <p className="max-w-[600px] text-[#64748B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of businesses that trust Packeeze for their custom branded packaging needs.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form 
            action='https://docs.google.com/forms/d/e/1FAIpQLScZssQngbYTcIozlKWjiys3LymnlYKwMc_Mmcc_ANpr5A9gjA/viewform?usp=pp_url' 
            method="GET" 
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
          >
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Get A Quote</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}
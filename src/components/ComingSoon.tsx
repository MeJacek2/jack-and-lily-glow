import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Heart, Star, Sparkles } from "lucide-react";

const FloatingShape = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`floating-element absolute opacity-60 ${className}`}>
    {children}
  </div>
);

const ComingSoon = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Please fill all fields",
        description: "We need both your name and email to keep you updated!",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for joining!",
      description: "We'll notify you as soon as Jack & Lily Nursery opens!",
    });
    
    setName("");
    setEmail("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <FloatingShape className="top-20 left-20 text-primary">
        <Heart size={60} />
      </FloatingShape>
      <FloatingShape className="top-40 right-32 text-secondary">
        <Star size={40} />
      </FloatingShape>
      <FloatingShape className="bottom-32 left-32 text-accent">
        <Sparkles size={50} />
      </FloatingShape>
      <FloatingShape className="bottom-20 right-20 text-primary">
        <Star size={35} />
      </FloatingShape>
      <FloatingShape className="top-60 left-1/2 text-secondary">
        <Heart size={45} />
      </FloatingShape>
      <FloatingShape className="bottom-60 right-1/3 text-accent">
        <Sparkles size={55} />
      </FloatingShape>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="glass-card text-center animate-fade-in-scale">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="./lovable-uploads/fb52790e-de03-4d14-a667-be5a85ee47e0.png" 
              alt="Jack & Lily Nursery" 
              className="w-64 h-auto mx-auto drop-shadow-lg"
            />
          </div>

          {/* Coming Soon Text */}
          <div className="relative mb-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold leading-none">
              <div className="flex items-center justify-center">
                <span className="text-pink-500 -mr-2">C</span>
                <span className="text-lime-400 -mr-2">O</span>
                <span className="text-yellow-400 -mr-2">M</span>
                <span className="text-blue-500 -mr-2">I</span>
                <span className="text-orange-500 -mr-2">N</span>
                <span className="text-cyan-500">G</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <span className="text-blue-600 -mr-2">S</span>
                <span className="text-lime-400 -mr-2">O</span>
                <span className="text-yellow-400 -mr-2">O</span>
                <span className="text-purple-500">N</span>
              </div>
            </h1>
            {/* Sparkle decorations */}
            <div className="sparkle" style={{top: '10%', left: '5%'}}>✨</div>
            <div className="sparkle" style={{top: '20%', right: '10%'}}>⭐</div>
            <div className="sparkle" style={{bottom: '30%', left: '8%'}}>✨</div>
            <div className="sparkle" style={{bottom: '15%', right: '5%'}}>⭐</div>
            <div className="sparkle" style={{top: '50%', left: '2%'}}>✨</div>
            <div className="sparkle" style={{top: '60%', right: '3%'}}>⭐</div>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed animate-slide-in-right">
            We're creating a magical learning environment where little minds blossom and grow. 
            <br />
            <span className="text-primary font-semibold">Join our waitlist to be the first to know when we open!</span>
          </p>

          {/* Features List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
            <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nurturing Care</h3>
              <p className="text-sm text-muted-foreground">Loving environment where every child feels safe and valued</p>
            </div>
            <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Learning</h3>
              <p className="text-sm text-muted-foreground">Play-based curriculum designed for early childhood development</p>
            </div>
            <div className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Creative Growth</h3>
              <p className="text-sm text-muted-foreground">Encouraging creativity and imagination through fun activities</p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto animate-slide-in-right">
            <div className="glass-form rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                <Mail className="inline w-6 h-6 mr-2 text-primary" />
                Stay Updated
              </h3>
              
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glass border-white/40 placeholder:text-foreground/70 text-foreground bg-white/30 focus:bg-white/40 transition-all duration-300"
                />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-white/40 placeholder:text-foreground/70 text-foreground bg-white/30 focus:bg-white/40 transition-all duration-300"
                />
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {loading ? "Joining..." : "Join the Waitlist"}
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                We'll never spam you. Promise! 💝
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
